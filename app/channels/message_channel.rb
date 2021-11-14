class MessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from "messages"
    ActionCable.server.broadcast('messages', { messages: Message.all })
  end

  def unsubscribed
    ActionCable.server.broadcast('messages', { messages: Message.all })
  end
end
