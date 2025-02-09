class Document < ApplicationRecord
    has_one_attached :image do |attachable|
            attachable.variant :thumb, resize_to_limit: [100, 100]
        end
    belongs_to :user

    has_many :taggings
    has_many :tags, through: :taggings
    
    # def tag_list
    #     self.tags.collect do |tag|
    #       tag.name
    #     end.join(",")
    # end

    # def tag_list=(tags_string)
    #     tag_names = tags_string.split(",").collect{|s| s.strip.downcase}.uniq
    #     new_or_found_tags = tag_names.collect { |name| Tag.find_or_create_by(name: name) }
    #     self.tags = new_or_found_tags
    # end     

    # validates :title, presence: true
    # validates :content, presence: true
end
