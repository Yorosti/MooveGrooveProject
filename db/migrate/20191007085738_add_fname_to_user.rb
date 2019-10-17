class AddFnameToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :fname, :string
    add_column :users, :lname, :string
    add_column :users, :sex, :string
    add_column :users, :dtbirth, :date
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
