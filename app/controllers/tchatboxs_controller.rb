class TchatboxsController < ApplicationController
  before_action :authenticate_user!

  def index
    @messages = Message.all.map { |message| message }
  end

  def create
    message = Message.new(content: params[:message])
    message.user_id = current_user.id
    message.save
    ActionCable.server.broadcast('messages', { messages: Message.all })
  end
end
