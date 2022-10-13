const sequelize=require('../db')
const {DataTypes} = require('sequelize')
const User = sequelize.define('user',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    email:{type:DataTypes.STRING, unique:true},
    passwors:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue:"USER"},
})
const Basket = sequelize.define('basket',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},

})
const BasketDevice = sequelize.define('basket_Device',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},

})
const Device = sequelize.define('device',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true,allowNul:false},
    price:{type:DataTypes.INTEGER, allowNul:false},
    rating:{type:DataTypes.INTEGER, defaultValue:0},
    img:{type:DataTypes.STRING, allowNul:false},
})

const Type = sequelize.define('type',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true,allowNul:false},

})
const Brand = sequelize.define('brand',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true,allowNul:false},

})

const Rating = sequelize.define('rating',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    rate:{type:DataTypes.INTEGER, allowNul:false},

})
const DeviceInfo = sequelize.define('deviceInfo',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    title:{type:DataTypes.STRING, allowNul:false},
    descriptoin:{type:DataTypes.STRING, allowNul:false},

})


User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

module.exports={
    User,
    Basket,
    BasketDevice,
    Device
}