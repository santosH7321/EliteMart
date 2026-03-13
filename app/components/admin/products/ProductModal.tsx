'use client'
import { AppstoreOutlined, ArrowRightOutlined, UploadOutlined } from '@ant-design/icons'
import { Button, Form, Input, InputNumber, Modal, Upload, message } from 'antd'
import axios from 'axios'
import { Product, t } from './productData'

type Props = {
  open: boolean
  onClose: () => void
  editProduct: Product | null
}

const labelStyle = { fontSize: 13, fontWeight: 600, color: t.textPrimary }
const inputStyle = { borderRadius: 10, borderColor: 'rgba(15,23,42,0.12)', fontSize: 14 }

const ProductModal = ({ open, onClose, editProduct }: Props) => {
  const [form] = Form.useForm()
  const isEdit = !!editProduct

  const createProduct = async (values: any) => {
  try {
    const file = values.image?.file 

    if (!file) {
      message.error("Please select an image first!")
      return
    }

    const formData = new FormData()
    formData.append("image", file)
    formData.append("title", values.title)
    formData.append("description", values.description)
    formData.append("price", values.price)
    formData.append("discount", values.discount ?? 0)

    await axios.post("/api/product", formData)
    message.success("Product added successfully!")
    form.resetFields()
    onClose()
  } catch (err) {
    message.error("Something went wrong!")
  }
}

  return (
    <Modal open={open} onCancel={onClose} footer={null} centered maskClosable={false} width={680}
      style={{ borderRadius: 20, padding: 0, overflow: 'hidden' }}
      styles={{ mask: { backdropFilter: 'blur(4px)' } }}
    >
      <div className="px-8 py-6" style={{ borderBottom: `1px solid ${t.border}` }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: t.accentLight }}>
            <AppstoreOutlined style={{ color: t.accent, fontSize: 16 }} />
          </div>
          <div>
            <h2 className="text-base font-bold" style={{ color: t.textPrimary }}>
              {isEdit ? 'Edit Product' : 'Add New Product'}
            </h2>
            <p className="text-xs" style={{ color: t.textMuted }}>
              {isEdit ? 'Update product details below' : 'Fill in the details to list a new product'}
            </p>
          </div>
        </div>
      </div>

      <div className="px-8 py-6">
        <Form form={form} layout="vertical" onFinish={createProduct} initialValues={editProduct ?? {}}>
          <Form.Item label={<span style={labelStyle}>Product Name</span>} name="title" rules={[{ required: true }]}>
            <Input size="large" placeholder="e.g. Men's Blue Jeans" style={inputStyle} />
          </Form.Item>

          <div className="grid grid-cols-3 gap-4">
            <Form.Item label={<span style={labelStyle}>Price (₹)</span>} name="price" rules={[{ required: true, type: 'number' }]}>
              <InputNumber size="large" placeholder="2000" className="w-full!" style={inputStyle} />
            </Form.Item>
            <Form.Item label={<span style={labelStyle}>Original Price (₹)</span>} name="original" rules={[{ required: true, type: 'number' }]}>
              <InputNumber size="large" placeholder="4000" className="w-full!" style={inputStyle} />
            </Form.Item>
            <Form.Item label={<span style={labelStyle}>Stock (qty)</span>} name="quantity" rules={[{ required: true, type: 'number' }]}>
              <InputNumber size="large" placeholder="20" className="w-full!" style={inputStyle} />
            </Form.Item>
          </div>

          <Form.Item label={<span style={labelStyle}>Description</span>} name="description" rules={[{ required: true }]}>
            <Input.TextArea rows={4} placeholder="Write a short product description..." style={{ ...inputStyle, resize: 'none' }} />
          </Form.Item>

          <Form.Item name="image" rules={[{ required: true, message: 'Please upload an image' }]}>
            <Upload.Dragger
              accept="image/*"
              maxCount={1}
              beforeUpload={() => false}
              showUploadList={true}
              style={{ borderRadius: 12, borderColor: 'rgba(239,68,68,0.25)', background: t.accentLight }}
            >
              <div className="py-4 flex flex-col items-center gap-2">
                <UploadOutlined style={{ fontSize: 24, color: t.accent }} />
                <p className="text-sm font-medium" style={{ color: t.textPrimary }}>
                  Drop image here or <span style={{ color: t.accent }}>browse</span>
                </p>
                <p className="text-xs" style={{ color: t.textMuted }}>PNG, JPG up to 5MB</p>
              </div>
            </Upload.Dragger>
          </Form.Item>

          <div className="flex gap-3 justify-end pt-2" style={{ borderTop: `1px solid ${t.border}` }}>
            <Button size="large" onClick={onClose} style={{ borderRadius: 10 }}>Cancel</Button>
            <Button htmlType="submit" size="large" icon={<ArrowRightOutlined />}
              style={{ background: t.accent, borderColor: t.accent, color: '#fff', borderRadius: 10, fontWeight: 600 }}>
              {isEdit ? 'Save Changes' : 'Add Product'}
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  )
}

export default ProductModal