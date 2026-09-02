"use client";

import { useEffect, useRef, useState } from "react";
import { FaRobot, FaPaperPlane, FaTimes, FaUser } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "@/src/helper/toast";

type Chat = {
  user: string;
  ai?: string;
};

type Data = {
  message: string;
};

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [aiRes, setAiRes] = useState<string>("");
  const [chats, setChat] = useState<Chat[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [hasError, setError] = useState<boolean>(false);
  const [blocked, setBlock] = useState<boolean>(false);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chats]);

  useEffect(() => {
    if (!open) return;
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [open]);

  const sendData = useMutation({
    mutationFn: (data: Data) =>
      axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/main/ai-message-cloud-flair`,
        data,
      ),
    onSuccess: (response) => {
      setAiRes(response.data.message);
    },
    onError: (err: any) => {
      if (err?.response?.status === 500) {
        setError(true);
        toast.fire({
          title: "Error in connection",
          icon: "error",
        });
      }

      if (err?.response?.status === 429) {
        setBlock(true);
        toast.fire({
          title: "You've reached your daily question limit",
          icon: "error",
        });
      }
    },
  });

  useEffect(() => {
    if (sendData.isError) {
      setChat((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].ai = "Sorry Something Went wrong";
        return updated;
      });
    }
    if (sendData.isSuccess) {
      setChat((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].ai = aiRes ?? "Sorry Something Went wrong";
        return updated;
      });
    }
  }, [sendData.isSuccess, aiRes, sendData.isError]);

  return (
    <section className="relative">
      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-28 right-10 z-50 flex h-[600px] w-[380px] flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg)] shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--primary)] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--bg)]">
                <FaRobot color="var(--primary)" size={22} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[var(--bg)]">
                  AI Assistant
                </h3>

                <div className="mt-1 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-400"></span>
                  <span className="text-xs text-[var(--bg)] opacity-80">
                    Online
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--bg)] transition hover:bg-black/10"
            >
              <FaTimes size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={chatContainerRef}
            className="flex-1 space-y-5 overflow-y-auto p-5"
          >
            {/* Welcome */}
            {chats?.map((chat, index) => (
              <div>
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-tr-md bg-[var(--primary)] px-4 py-3 text-sm leading-6 text-[var(--bg)]">
                    {chat.user}
                  </div>
                </div>
                {sendData.isPending && !chat.ai ? (
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]">
                      <BsStars color="var(--bg)" size={15} />
                    </div>

                    <div className="flex items-center gap-1 rounded-2xl rounded-tl-md bg-[var(--secondary)] px-4 py-4">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--text)] [animation-delay:-0.3s]"></span>
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--text)] [animation-delay:-0.15s]"></span>
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--text)]"></span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-3 mt-5">
                    <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] shadow-sm">
                      <div className="absolute inset-0 rounded-full bg-[var(--primary)] opacity-20 blur-md"></div>
                      <BsStars
                        color="var(--bg)"
                        size={16}
                        className="relative z-10"
                      />
                    </div>
                    <div className="relative max-w-[80%] rounded-2xl rounded-tl-md border border-[var(--border)] bg-[var(--secondary)] px-4 py-3 text-sm leading-6 text-[var(--text)] shadow-sm">
                      {chat.ai}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Suggested Questions */}
          <div className="flex gap-2 overflow-x-auto px-4 pb-3">
            <button className="shrink-0 rounded-full border border-[var(--border)] px-3 py-2 text-xs text-[var(--text)] transition hover:border-[var(--primary)]">
              Find a salon
            </button>

            <button className="shrink-0 rounded-full border border-[var(--border)] px-3 py-2 text-xs text-[var(--text)] transition hover:border-[var(--primary)]">
              Available times
            </button>

            <button className="shrink-0 rounded-full border border-[var(--border)] px-3 py-2 text-xs text-[var(--text)] transition hover:border-[var(--primary)]">
              My reservations
            </button>
          </div>

          {/* Input */}
          <div className="border-t border-[var(--border)] p-4">
            <div className="flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--secondary)] px-3 py-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && message.trim()) {
                    if (blocked) {
                      toast.fire({
                        title: "You've reached your daily question limit",
                        icon: "error",
                      });
                      return;
                    }
                    sendData.mutate({ message });
                    setChat((prev) => [
                      ...prev,
                      {
                        user: message,
                      },
                    ]);
                    setMessage("");
                  }
                }}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent px-2 text-sm text-[var(--text)] outline-none placeholder:text-[var(--text)]/40"
              />

              <button
                disabled={sendData.isPending}
                onClick={() => {
                  if (blocked) {
                    toast.fire({
                      title: "You've reached your daily question limit",
                      icon: "error",
                    });

                    return;
                  }

                  if (!message.trim()) return;
                  sendData.mutate({ message });
                  setChat((prev) => [
                    ...prev,
                    {
                      user: message,
                    },
                  ]);
                  setMessage("");
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)] transition hover:scale-105"
              >
                <FaPaperPlane color="var(--bg)" size={15} />
              </button>
            </div>

            <p className="mt-2 text-center text-[10px] text-[var(--text)]/40">
              AI can make mistakes. Check important information.
            </p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-1">
        {!open && (
          <span className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 text-xs font-medium text-[var(--text)] shadow-sm">
            Need help?
          </span>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--primary)] shadow-md transition-all duration-300 hover:scale-107 before:absolute before:inset-0 before:rounded-full before:bg-[var(--primary)] before:animate-ping before:opacity-50"
        >
          {open ? (
            <FaTimes color="var(--bg)" size={24} className="relative z-10" />
          ) : (
            <FaRobot color="var(--bg)" size={30} className="relative z-10" />
          )}
        </button>
      </div>
    </section>
  );
}
