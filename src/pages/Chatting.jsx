import React, { useEffect, useState, useRef } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vlowdzoigoyaudsydqam.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsb3dkem9pZ295YXVkc3lkcWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MDg3NTUsImV4cCI6MjA1ODk4NDc1NX0.7ltcwu8G4_awXU5SFkAXRGnSeThjTTqAOVUm1bjtmnU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Chatting() {
  const [username, setUsername] = useState("양아름");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messageRef = useRef(null);

  // 메시지 불러오기
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("time", { ascending: true });

    if (error) {
      console.error("메시지 불러오기 실패:", error.message);
    } else {
      setMessages(data);
    }
  };

  // 메시지 보내기
  const sendMessage = async () => {
    if (!username || !message) return;
    const { error } = await supabase.from("messages").insert([
      {
        name: username,
        message: message,
      },
    ]);
    if (error) {
      console.error("메시지 전송 실패:", error.message);
    }
    setMessage("");
  };

  // 실시간 업데이트 설정
  useEffect(() => {
    fetchMessages();

    // 실시간 수신 로직
    supabase
      .channel("realtime-messages")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          if (!payload.new.time) {
            fetchMessages();
          } else {
            setMessages((prev) => [...prev, payload.new]);
          }
        }
      )
      .subscribe();
  }, []);

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      <div className="flex flex-row">
        {messages.map((msg) => (
          <div key={msg.id}>
            <div>
              <img className="w-[40px] h-[30px]" src="/public/logo.svg" />
              <div>
                <div>
                  <p>{msg.name}</p>
                  <p>
                    {msg.time && new Date(msg.time).toTimeString().slice(0, 5)}
                  </p>
                </div>
                <p>{msg.message}</p>
              </div>
            </div>
          </div>
        ))}
        <div ref={messageRef} />
      </div>

      <div>
        <input
          type="text"
          placeholder="메시지를 입력하세요"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
      </div>
    </div>
  );
}
