class AddActivitiesListToActivities < ActiveRecord::Migration[6.0]
    def change
      add_reference :activities, :activities_list, foreign_key: true
    end
  
end
