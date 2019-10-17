class CreateActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :activities do |t|
      t.string :name
      t.text :descr
      t.integer :duration
      t.date :date

      t.timestamps
    end
  end
end
