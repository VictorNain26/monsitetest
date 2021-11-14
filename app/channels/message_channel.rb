class MessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from "messages"
    stream_from "control_panel"
    ActionCable.server.broadcast('messages', { messages: Message.all })
    ActionCable.server.broadcast('users', { users: Redis.new.pubsub("channels", "action_cable/*").length })
  end

  def unsubscribed
    ActionCable.server.broadcast('users', { users: Redis.new.pubsub("channels", "action_cable/*").length, user: current_user.username.capitalize })
  end
end
