// import Product from "../models/product"
// export const list = async(req, res) => {
//     try {
//         const product = await Product.find().exec()
//         res.json(product)
//     } catch (error) {
//         res.status(400).json({
//             message: "Không thêm được sản phẩm anh ei"
//         })
//     }
// }
// export const create = async(req, res) => {
//     try {
//         const product = await new Product(req.body).save();
//         res.json(product)
//     } catch (error) {
//         res.status(400).json({
//             message: "Không thêm được sản phẩm anh ei"
//         })
//     }
// }
// export const read = async(req, res) => {
//     try {
//         const product = await Product.findOne({ _id: req.params.id }).exec();
//         res.json(product)
//     } catch (error) {
//         res.status(400).json({
//             message: "Không thêm được sản phẩm anh ei"
//         })
//     }
// }
// export const remove = async(req, res) => {
//     try {
//         const product = await Product.findOneAndDelete({ _id: req.params.id }).exec();
//         res.json(product)
//     } catch (error) {
//         res.status(400).json({
//             message: "Không thêm được sản phẩm anh ei"
//         })
//     }
// }
// export const update = async(req, res) => {
//     const condition = { _id: req.params.id };
//     const doc = req.body;
//     const option = { new: true };
//     try {
//         const product = await Product.findOneAndUpdate(condition, doc, option);
//         res.json(product);
//     } catch (error) {
//         res.status(400).json({
//             message: "Lỗi không tìm được sản phẩm"
//         })
//     }
// }

import Product from '../models/product'
// API thêm sản phẩm
export const create = async(req, res) => {
        try {
            const product = await new Product(req.body).save();
            res.json(product)
        } catch (error) {
            res.status(400).json({
                message: "Không tìm thấy"
            })
        }
    }
    // API list sản phẩm
export const list = async(req, res) => {
    try {
        const products = await Product.find().sort({ createAt: -1 });
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy"
        })
    }
}
export const read = async(req, res) => {
    const filter = { _id: req.params.id }
    try {
        const product = await Product.findOne(filter);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy"
        })
    }
}

export const remove = async(req, res) => {
    const condition = { _id: req.params.id }
    try {
        const product = await Product.findOneAndDelete(condition);
        res.json({
            message: "Đã xóa thành công",
            data: product
        });
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const update = async(req, res) => {
    const condition = { _id: req.params.id };
    const doc = req.body;
    const option = { new: true };
    try {
        const product = await Product.findOneAndUpdate(condition, doc, option);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const search = async(req, res) => {
    try {
        const regex = new RegExp(req.params.name, 'i');
        const result = await Product.find({ name: regex }).exec();
        res.status(200).json(result)

    } catch (error) {
        res.status(400).json({
            message: "Tạch rồi"
        })
    }
}