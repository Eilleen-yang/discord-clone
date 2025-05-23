import React, { useEffect, useState, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import { LogoColorIcon } from "./icons/logo";

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
    <div className="flex-1/2 px-4 pb-4 h-full border-l border-l-[var(--hover-bg-color)]">
      <div className="pt-4">
        <ul className="flex flex-col gap-8 pl-1 h-[calc(100dvh-16.2rem)] overflow-y-auto">
          {messages.map((msg) => (
            <li
              key={msg.id}
              className="flex gap-2 items-center text-[var(--hover-bg-color)] dark:text-white hover:bg-blue-50 dark:hover:bg-[var(--hover-bg-color)] rounded-lg"
            >
              <Link
                className="flex items-center justify-center w-[40px] h-[40px] rounded-full"
                to={"/channel/:username"}
              >
                <LogoColorIcon />
              </Link>
              <div className="pl-2 w-full">
                <div className="flex gap-2 items-end">
                  <Link
                    to={"/channel/:username"}
                    className="block font-semibold text-xl"
                  >
                    {msg.name}
                  </Link>
                  <p>
                    {msg.time && new Date(msg.time).toTimeString().slice(0, 5)}
                  </p>
                </div>
                <p className="text-2xl font-medium">{msg.message}</p>
              </div>
            </li>
          ))}
          <div ref={messageRef} />
        </ul>

        <div className="w-full h-[5.8rem] border border-[var(--hover-bg-color)] rounded-xl z-10 text-[var(--hover-bg-color)] dark:text-[var(--normal-txt-color)]">
          <input
            className="w-full h-full px-6 text-2xl"
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
    </div>
  );
}
