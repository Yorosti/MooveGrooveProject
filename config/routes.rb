Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'users/registrations', passwords: 'users/passwords'  }  

  resources :activities
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#home"
end
