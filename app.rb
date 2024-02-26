require 'sinatra'
require 'active_record'
require 'mysql2'

ActiveRecord::Base.configurations = YAML.load_file('./config/database.yml')
ActiveRecord::Base.establish_connection('development')

class BBS < ActiveRecord::Base
end

get '/' do
  # bbs top 
  'Hello BBS!'
end

post '/' do
  # bbs add
end
