Cấu trúc thư mục

### `src/`
Thư mục chứa toàn bộ mã nguồn chính của ứng dụng.

#### `src/controllers/`
Chứa các controller (bộ điều khiển) xử lý logic cho từng route. Controllers nhận request từ routes, xử lý dữ liệu, gọi services và trả về response cho client.

**Ví dụ:** `userController.js`, `productController.js`

#### `src/models/`
Chứa các model định nghĩa cấu trúc dữ liệu và schema của database thông qua ORM (Object-Relational Mapping). Các model này đại diện cho các bảng trong database.

**Ví dụ:** `User.js`, `Product.js`, `Order.js`

#### `src/routes/`
Chứa các file định nghĩa routes (đường dẫn API endpoints) của ứng dụng. Routes kết nối URL với các controller tương ứng.

**Ví dụ:** `userRoutes.js`, `productRoutes.js`, `authRoutes.js`

#### `src/middleware/`
Chứa các middleware functions - các hàm được thực thi trước khi request đến controller. Thường dùng cho authentication, authorization, logging, validation, error handling.

**Ví dụ:** `authMiddleware.js`, `errorHandler.js`, `logger.js`

#### `src/services/`
Chứa business logic và các service layer. Services xử lý các tác vụ phức tạp, tương tác với database, gọi API bên ngoài, hoặc thực hiện các tính toán.

**Ví dụ:** `userService.js`, `emailService.js`, `paymentService.js`

#### `src/config/`
Chứa các file cấu hình cho ứng dụng như cấu hình database, environment variables, constants, và các settings khác.

**Ví dụ:** `database.js`, `config.js`, `constants.js`

#### `src/utils/`
Chứa các hàm tiện ích (utility functions) có thể tái sử dụng trong toàn bộ ứng dụng như helpers, formatters, validators đơn giản.

**Ví dụ:** `helpers.js`, `formatters.js`, `dateUtils.js`

#### `src/validators/`
Chứa các schema và rules để validate dữ liệu đầu vào từ client (request body, query params, params). Thường sử dụng thư viện như Joi, express-validator.

**Ví dụ:** `userValidator.js`, `productValidator.js`

### `tests/`
Chứa các file test cho ứng dụng (unit tests, integration tests, e2e tests). Có thể chia thành các thư mục con như `unit/`, `integration/`, `e2e/`.

**Ví dụ:** `user.test.js`, `product.test.js`

### `public/`
Chứa các file tĩnh được phục vụ trực tiếp cho client như images, CSS, JavaScript frontend, hoặc các file HTML.

**Ví dụ:** `images/`, `css/`, `js/`

### `uploads/`
Thư mục lưu trữ các file được upload từ client (images, documents, etc.). Thường được thêm vào `.gitignore`.

### `logs/`
Thư mục chứa các file log của ứng dụng (error logs, access logs, application logs).