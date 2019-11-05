class RemoveActivitiesListsFromActivities < ActiveRecord::Migration[6.0]
  def change
    remove_reference :activities, :activities_lists, null: false, foreign_key: true
  end
end
