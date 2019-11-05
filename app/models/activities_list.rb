class ActivitiesList < ApplicationRecord
    has_many :activities
    has_many :users , dependent: :destroy, through: :activities
end
