class AddActivityIdToActivities < ActiveRecord::Migration[6.0]
  def change
    add_column :activities, :ActivityId, :integer
  end
end
