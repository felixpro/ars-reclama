Rails.application.routes.draw do
  root 'customers#index'
  resources :customers do
    resources :services
    resources :reclamations
  end
  get '/ars', to: 'customers#ars'
  get '/cenasa', to: 'customers#cenasa'
  get '/naseguro', to: 'customers#naseguro'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
