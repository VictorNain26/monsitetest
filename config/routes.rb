Rails.application.routes.draw do
  devise_for :users
  root to: 'homes#index'
  mount ActionCable.server => '/tchatboxs'
  resources :tchatboxs, only: %i[index create]
  resources :sinemas, only: %i[index]
end
