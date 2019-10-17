class ApplicationController < ActionController::Base

    protect_from_forgery with: :exception
      
    def activity_archive
       @activity_archive ||= {
        "1" => {'category' => 'Strength', 'name' => 'Activity1', 'img' => 'austris-augusts-52p1K0d0euM-unsplash.jpg'},
        "2" => {'category' => 'Agility', 'name' => 'Activity2', 'img' => 'bruno-nascimento-PHIgYUGQPvU-unsplash.jpg'}
       }
    end
    helper_method :activity_archive

end
