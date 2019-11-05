class CreateActivitiesLists < ActiveRecord::Migration[6.0]
  def change
    create_table :activities_lists do |t|
      t.string :name
      t.string :category
      t.string :imagePath

      t.timestamps
    end
  end
end
