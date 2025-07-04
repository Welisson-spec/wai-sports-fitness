import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, X } from "lucide-react";
import { useChatbot } from "@/hooks/useChatbot";

export function ChatbotModal() {
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, isOpen, setIsOpen, sendMessage, sendQuickMessage, isSending } = useChatbot();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      sendMessage(inputMessage);
      setInputMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-dark-secondary border-dark-tertiary max-w-md w-full h-[600px] flex flex-col">
        <DialogHeader className="flex flex-row items-center justify-between p-4 border-b border-dark-tertiary">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-neon-orange rounded-full flex items-center justify-center">
              <Bot className="text-dark-primary h-5 w-5" />
            </div>
            <div>
              <DialogTitle className="font-semibold">Coach IA</DialogTitle>
              <Badge className="bg-green-500 text-xs">Online</Badge>
            </div>
          </div>
        </DialogHeader>
        
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {!messages?.length && (
            <div className="bg-dark-primary rounded-lg p-3 max-w-[80%]">
              <p className="text-sm">Olá! Sou seu coach pessoal. Como posso ajudá-lo hoje?</p>
            </div>
          )}
          
          {messages?.map((message) => (
            <div
              key={message.id}
              className={`rounded-lg p-3 max-w-[80%] ${
                message.sender === 'user'
                  ? 'bg-neon-orange text-dark-primary ml-auto'
                  : 'bg-dark-primary'
              }`}
            >
              <p className="text-sm">{message.message}</p>
            </div>
          ))}
          
          {isSending && (
            <div className="bg-dark-primary rounded-lg p-3 max-w-[80%]">
              <p className="text-sm">Digitando...</p>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {!messages?.length && (
          <div className="px-4 pb-4">
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => sendQuickMessage('Como melhorar meu tempo?')}
                className="bg-dark-tertiary border-dark-tertiary hover:bg-neon-orange hover:border-neon-orange text-xs"
              >
                Como melhorar meu tempo?
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => sendQuickMessage('Estou sentindo dor')}
                className="bg-dark-tertiary border-dark-tertiary hover:bg-neon-orange hover:border-neon-orange text-xs"
              >
                Estou sentindo dor
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => sendQuickMessage('Preciso de motivação')}
                className="bg-dark-tertiary border-dark-tertiary hover:bg-neon-orange hover:border-neon-orange text-xs"
              >
                Preciso de motivação
              </Button>
            </div>
          </div>
        )}
        
        <div className="p-4 border-t border-dark-tertiary">
          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-dark-primary border-dark-tertiary text-sm focus:border-neon-orange"
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isSending}
              className="bg-neon-orange hover:bg-neon-orange-light px-4 py-2 transition-colors"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
