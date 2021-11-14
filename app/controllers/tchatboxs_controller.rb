class TchatboxsController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def create
    message = Message.new(content: params[:message])
    message.user_id = current_user.id
    message.username = current_user.username
    message.time = Time.now.strftime('%H:%M')
    message.save
    ActionCable.server.broadcast('messages', { messages: Message.all })
  end
end
