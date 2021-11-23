class ControlPannelChannel < ApplicationCable::Channel
  def subscribed
    stream_from "users"
    ActionCable.server.remote_connections.where(current_user: User.find(current_user.id))
    ActionCable.server.broadcast('users', { users: ActionCable.server.connections.length })
  end

  def unsubscribed
    ActionCable.server.broadcast('users', { users: ActionCable.server.connections.length })
  end
end
