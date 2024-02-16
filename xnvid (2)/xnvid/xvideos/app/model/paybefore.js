

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const Paybefore = new Schema({
        out_order_id_before: {
            type: String
        },
        out_order_id: {
            type: String, index: true
        },
        notify_url: {
            type: String
        },
        bank_code: {
            type: String,
        },
        bank_code_id:{
            type:Schema.Types.ObjectId,
            ref: 'paytype'
        },
        money: {
            type: String
        },
        status: {
            type: Number // 订单状态：1或2成功，0失败
        },
        sign:{
            type: String
        }
    },
        {
            collection: 'paybefore',
            usePushEach: true, // 解决 Unknown modifier: $pushAll 报错，作用原理未知
            timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }, // 生成时间 
        });
    return mongoose.model('paybefore', Paybefore);
};