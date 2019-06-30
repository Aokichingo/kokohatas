Rails.application.routes.draw do
  get 'post/index'

  get '/' => 'home#index'
  get '/home/work' => 'home#work'
  get '/home/member' => 'home#member'
   get '/home/introduction' => 'home#introduction'
   get '/post/index' => 'post#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
