"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, LoaderCircle, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import EmptyState from "../_components/EmptyState";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useParams, useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

type messages = {
  content: string;
  role: string;
  type: string;
};

function AiChat() {
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [messageList, setMessageList] = useState<messages[]>([]);
  const { chatid } = useParams();
  const router = useRouter();
  console.log(chatid);

  // useEffect(() => {
  //   chatid && GetMessageList();
  // }, [chatid]);

  // const GetMessageList = async () => {
  //   const result = await axios.get("/api/history?recordId" + chatid);
  //   console.log(">>>", result.data);
  //   setMessageList(result?.data?.content);
  // };

  useEffect(() => {
    chatid && GetMessageList();
  }, [chatid]);

  const GetMessageList = async () => {
    const result = await axios.get("/api/history?recordId=" + chatid);
    console.log(">>>", result.data);
    setMessageList(result?.data?.content);
  };

  // Send Data to the Gemini API Key or Gemini AI
  const onSend = async () => {
    if (!userInput.trim()) return;

    try {
      setLoading(true);
      setMessageList((prev) => [
        ...prev,
        {
          content: userInput,
          role: "user",
          type: "text",
        },
      ]);
      setUserInput("");
      const result = await axios.post("/api/ai-career-chat-agent", {
        userInput,
      });
      // console.log(result.data);
      setMessageList((prev) => [...prev, result.data]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };
  // console.log(messageList);

  useEffect(() => {
    // save messages in to the database
    messageList.length > 0 && updateMessageList();
  }, [messageList]);

  const updateMessageList = async () => {
    const result = await axios.put("/api/history", {
      content: messageList,
      recordId: chatid,
    });
    console.log(result);
  };

  const onNewChat = async () => {
    const id = uuidv4();

    const result = await axios.post("/api/history", {
      recordId: id,
      content: [],
    });
    console.log(result);
    // router.replace("ai-tools/ai-chat/" + id);
    router.replace(id);
  };

  return (
    <div className="px-10 md:px-24 lg:px-36 xl:px-48 ">
      <div className="flex items-center justify-between ">
        <div>
          <h2 className="font-bold text-lg">
            <div className="flex gap-1">
              <Bot /> Kaizen Ai
            </div>
          </h2>
          <p>
            Ask career-related questions and get AI-powered answers instantly.
          </p>
        </div>
        <Button onClick={onNewChat}>+ New Chat</Button>
      </div>

      <div className="flex flex-col min-h-[75vh] mt-5">
        {messageList?.length <= 0 && (
          <div className="mt-5">
            {/* Empty State options */}

            <EmptyState
              selectedQuestion={(question: string) => setUserInput(question)}
            />
          </div>
        )}

        {/* Message List */}
        <div className="flex-1">
          {/* Messages will appear here */}

          {messageList?.map((message, index) => (
            <div>
              <div
                key={index}
                className={`flex mb-2 w-full ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={` p-3 rounded-lg  gap-2  ${
                    message.role === "user"
                      ? "bg-gray-300 text-black rounded-lg"
                      : "bg-gray-100 text-black "
                  }`}
                >
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
              </div>
              {loading && messageList?.length - 1 == index && (
                <div className="flex justify-start p-3 rounded-lg  gap-2 bg-gray-50 text-black mb-2">
                  <>
                    <LoaderCircle className="animate-spin " />
                    {/* <span>Kaizen Ai Career Coach Agent Thinking... </span> */}
                    <span>Thinking... </span>
                  </>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Field */}
        <div className="flex justify-between items-center gap-4 mt-4">
          <Input
            placeholder="Type your question..."
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
          <Button onClick={onSend} disabled={loading}>
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AiChat;
