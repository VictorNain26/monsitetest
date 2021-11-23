class MessageChannel < ApplicationCable::Channel
  def subscribed
    ActionCable.server.remote_connections.where(current_user: User.find(current_user.id))
    stream_from "messages"
    ActionCable.server.broadcast('messages', { messages: Message.all })
    # envoi les messages a tout le mon même a ceux deja connecté
  end

  def unsubscribed
    ActionCable.server.remote_connections.where(current_user: User.find(current_user.id)).disconnect
  end
end
