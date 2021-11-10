Rails.application.routes.draw do
  devise_for :users
  root to: 'homes#index'
  get '/tchatboxs', to: 'tchatboxs#index'
  get '/sinemas', to: 'sinemas#index'
end
