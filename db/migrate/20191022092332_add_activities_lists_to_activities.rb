class AddActivitiesListsToActivities < ActiveRecord::Migration[6.0]
    def change
      add_reference :activities, :activities_lists, foreign_key: true
    end
  
end
