class MessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from "messages"
    ActionCable.server.broadcast('messages', { messages: Message.all, users: Redis.new.pubsub("channels", "action_cable/*").length, user: current_user.username.capitalize })
  end

  def unsubscribed
    ActionCable.server.broadcast('messages', { messages: Message.all, users: Redis.new.pubsub("channels", "action_cable/*").length, user: current_user.username.capitalize })
  end
end
