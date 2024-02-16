module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const Paytype = new Schema({
        type: {
            type: String
        },
        code: {
            type: String, index: true
        },
        isOpen: {
            type: Boolean
        },
        money: {
            type: String
        },
        rule: {
            type: String
        },
        status: {
            type: String
        },
        maxNum: {
            type: Number
        },
        minNum: {
            type: Number
        },
        moneyList: {
            type: Array,
            default: []
        },
        rate:{
            type: String,
        }
    },
        {
            collection: 'paytype',
            usePushEach: true, // 解决 Unknown modifier: $pushAll 报错，作用原理未知
            timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }, // 生成时间 
        });
    return mongoose.model('paytype', Paytype);
};

