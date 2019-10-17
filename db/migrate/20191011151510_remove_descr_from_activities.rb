class RemoveDescrFromActivities < ActiveRecord::Migration[6.0]
  def change

    remove_column :activities, :descr, :text
    remove_column :activities, :name, :stirng
  end
end
