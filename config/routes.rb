Rails.application.routes.draw do
  root to: 'homes#index'
  get '/tchatboxs', to: 'tchatboxs#index'
  get '/sinemas', to: 'sinemas#index'
end
