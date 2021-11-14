class ControlPannelChannel < ApplicationCable::Channel
  def subscribed
    stream_from "users"
    ActionCable.server.broadcast('users', { users: Redis.new.pubsub("channels", "action_cable/*").length, user: current_user.username.capitalize })
  end

  def unsubscribed
    ActionCable.server.broadcast('users', { users: (Redis.new.pubsub("channels", "action_cable/*").length) - 1 })
  end
end
