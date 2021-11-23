class SinemasController < ApplicationController
  before_action :disconnect

  def disconnect
    if current_user then ActionCable.server.remote_connections.where(current_user: User.find(current_user.id)).disconnect end
  end

  def index
  end
end
