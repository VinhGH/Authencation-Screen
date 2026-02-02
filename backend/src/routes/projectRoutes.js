import express from 'express';
import { create, getAll, getDetail, update, remove } from '../controllers/projectController.js';

const router = express.Router();

/**
 * @swagger
 * /api/projects:
 *   post:
 *     summary: Tạo project mới
 *     tags: [Projects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
router.post('/', create);

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Lấy danh sách projects
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: Thành công
 */
router.get('/', getAll);

/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *     summary: Lấy chi tiết project
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thành công
 *       404:
 *         description: Không tìm thấy project
 */
router.get('/:id', getDetail);

/**
 * @swagger
 * /api/projects/{id}:
 *   put:
 *     summary: Cập nhật project
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
router.put('/:id', update);

/**
 * @swagger
 * /api/projects/{id}:
 *   delete:
 *     summary: Xóa project
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Xóa thành công
 */
router.delete('/:id', remove);

export default router;
