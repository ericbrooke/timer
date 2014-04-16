class CreateUsers < ActiveRecord::Migration
  def change
  	create_table :users do |t|
    	t.string :name
      t.string :closest_to_zero

      t.timestamps
    end
  end
end
