
class HomeController < ApplicationController
  before_action :authenticate_user! 
    def home
      if  user_signed_in? 
        redirect_to  :controller => 'activities', :action => 'index'
      end
    end
  end