const products = [

            {
                id: 1,
                name: "Áo Thun Nam Basic",
                price: 79000,
                category: "Áo Nam",
                material: "Cotton",
                color: "Đen, trắng",
                description: "Áo thun nam basic thiết kế đơn giản, dễ phối đồ và phù hợp mặc hằng ngày.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukskLi0Mw8bxoURf95rS7Dj9VqfePxjGT5-2CRvwtNA&s=10",
                sizes: ["S", "M", "L", "XL"],
                newProduct: true,
                hot: true,
                outlet: false
            },

            {
                id: 2,
                name: "Áo Thun Nam",
                price: 159000,
                category: "Áo Nam",
                material: "Cotton",
                color: "Đen, trắng, xám",
                description: "Áo thun nam phong cách trẻ trung, phù hợp đi học, đi chơi và sử dụng hằng ngày.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDd5YMBczEVHLGm7WCKQLgeeJPoYG_9hwCkCUy6FSDlw&s=10",
                sizes: ["S", "M", "L", "XL"],
                newProduct: true,
                hot: false,
                outlet: false
            },

            {
                id: 3,
                name: "Áo Thun Nam Cao Cấp",
                price: 189000,
                category: "Áo Nam",
                material: "Cotton cao cấp",
                color: "Đen, xanh",
                description: "Chất liệu mềm mại, form áo hiện đại và thích hợp cho nhiều hoàn cảnh.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3lUa-fqU8Jl7at5zovPAKiRM_ROkvzmdXhPvXZvKZjg&s=10",
                sizes: ["M", "L", "XL"],
                newProduct: true,
                hot: true,
                outlet: false
            },

            {
                id: 4,
                name: "Quần Jeans Nam",
                price: 209000,
                category: "Quần Nam",
                material: "Denim",
                color: "Xanh denim",
                description: "Quần jeans nam phong cách trẻ trung, dễ kết hợp với áo thun hoặc áo sơ mi.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjMMsMTjGcG3grvHqiBDZpKBD7UdJNWXDgv6GQvcb-A&s=10",
                sizes: ["S", "M", "L", "XL"],
                newProduct: false,
                hot: true,
                outlet: false
            },

            {
                id: 5,
                name: "Áo Khoác Hoodie",
                price: 409000,
                category: "Áo Nam",
                material: "Nỉ cotton",
                color: "Đen, xám",
                description: "Hoodie giữ ấm tốt, thiết kế năng động và phù hợp với phong cách đường phố.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDDg5OBqBFh5QzM_jY4qjVnUCLLPXawkMhCSU4lk_Vg&s=10",
                sizes: ["M", "L", "XL"],
                newProduct: false,
                hot: true,
                outlet: false
            },

            {
                id: 6,
                name: "Áo Sơ Mi Nam",
                price: 429000,
                category: "Áo Nam",
                material: "Cotton",
                color: "Trắng, xanh",
                description: "Áo sơ mi nam lịch sự, phù hợp đi học, đi làm hoặc các dịp quan trọng.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF6QCOOnxp1BwdSyqwfFjm1V9NJcmSrrRs-X3eSIaSA&s=10",
                sizes: ["S", "M", "L", "XL"],
                newProduct: false,
                hot: false,
                outlet: true
            },

            {
                id: 7,
                name: "Quần Short Nam Thể Thao",
                price: 159000,
                category: "Quần Nam",
                material: "Polyester",
                color: "Đen, xám",
                description: "Quần short thể thao nhẹ, thoải mái khi vận động hoặc mặc hằng ngày.",
                image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTtJaZw68ZKIAn6-cn7n5MftCgiPJlMpuTAXlUqIjc2y7_H3UqpyjEJ4EYjKWDUgbf9blnPtG6KVWtiKNEY5B2uCRFyBXQV8xtZsh6Hq7p9t7vlQFWAw2xMxIfN&usqp=CAc",
                sizes: ["M", "L", "XL"],
                newProduct: false,
                hot: true,
                outlet: false
            },

            {
                id: 8,
                name: "Quần Tây Nam",
                price: 529000,
                category: "Quần Nam",
                material: "Kaki pha",
                color: "Đen, xám",
                description: "Quần tây nam lịch sự, phù hợp với áo sơ mi và các dịp cần trang phục trang trọng.",
                image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQ35RyL5ZONNMX-TVYLJ1lsF8pVNkt3SH5K_bHdHO8jkC4iV-hJMrEGGGVt4ju4ZayXBVym0_L0NPJJb440uoRPAHGItuTL32B15M9wmHNR92apYqEi4K4FaksYuwkptnfC4AwLzI&usqp=CAc",
                sizes: ["S", "M", "L", "XL"],
                newProduct: false,
                hot: false,
                outlet: true
            },

            {
                id: 9,
                name: "Quần Âu Nam",
                price: 400000,
                category: "Quần Nam",
                material: "Kaki",
                color: "Đen, xanh navy",
                description: "Quần âu nam thiết kế gọn gàng, phù hợp đi học, đi làm và các sự kiện.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp00NhXMx53wVfhJOUSoGIc15T3a-fJUW_j79ghGnHnA&s=10",
                sizes: ["S", "M", "L", "XL"],
                newProduct: false,
                hot: false,
                outlet: false
            },

            {
                id: 10,
                name: "Quần Kaki Nam",
                price: 300000,
                category: "Quần Nam",
                material: "Kaki",
                color: "Be, đen, nâu",
                description: "Quần kaki nam có kiểu dáng đơn giản, dễ phối với nhiều loại áo.",
                image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS-lYLPz7FFAwO-2UNnPG-y8hHoSP1M91GyzCrjxDLN-SVRfT1ZeQSgNozaU0iVJ-U6kJ232FQOj4YDjhjJeM3ofyZCi_ZNeGpbYSHarcCVL9N35BvP2Nwd&usqp=CAc",
                sizes: ["S", "M", "L", "XL"],
                newProduct: false,
                hot: false,
                outlet: true
            },

            {
                id: 11,
                name: "Áo Thun Nữ Tay Ngắn",
                price: 129000,
                category: "Áo Nữ",
                material: "Cotton",
                color: "Trắng, đen, hồng",
                description: "Áo thun nữ tay ngắn trẻ trung, thoải mái và dễ phối đồ.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEYnu9TufTIo4GoCuq6RH2lcTf3Cs-t_227tSeSyqKQ&s=10",
                sizes: ["S", "M", "L", "XL"],
                newProduct: true,
                hot: true,
                outlet: false
            },

            {
                id: 12,
                name: "Áo Thun Nữ Basic",
                price: 99000,
                category: "Áo Nữ",
                material: "Cotton",
                color: "Trắng, đen",
                description: "Thiết kế basic đơn giản, phù hợp mặc hàng ngày và dễ kết hợp trang phục.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeotYGJPkHXPdMOkdFsJC0U6vuJ_McW8X6ilENBcK4GNO6kjA60LJAe20&s=10",
                sizes: ["S", "M", "L", "XL"],
                newProduct: true,
                hot: false,
                outlet: false
            },

            {
                id: 13,
                name: "Áo Ôm Body Nữ",
                price: 125000,
                category: "Áo Nữ",
                material: "Thun co giãn",
                color: "Đen, trắng",
                description: "Áo nữ kiểu dáng ôm, chất liệu co giãn và phù hợp phối với nhiều loại quần hoặc váy.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98CR13OetEmprsE9Z7zkHABpreF1R2nWtzYq9IiK-RA&s=10",
                sizes: ["S", "M", "L"],
                newProduct: false,
                hot: true,
                outlet: false
            },

            {
                id: 14,
                name: "Áo Croptop",
                price: 229000,
                category: "Áo Nữ",
                material: "Thun cotton",
                color: "Đen, trắng",
                description: "Áo croptop thiết kế trẻ trung, thích hợp phối cùng quần jeans hoặc chân váy.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sKe7UPKRXqqkH7M_AwgTdD0Wk9mMnSHsaBGv0I8N_g&s=10",
                sizes: ["S", "M"],
                newProduct: true,
                hot: false,
                outlet: true
            },

            {
                id: 15,
                name: "Váy Ngắn Nữ",
                price: 199000,
                category: "Váy Nữ",
                material: "Vải tổng hợp",
                color: "Đen, trắng",
                description: "Váy ngắn nữ thiết kế thời trang, phù hợp cho các buổi đi chơi và sự kiện.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_lKJ1QZvasQUB2j0XFCimNgcAFHpjblihEdgkumuTw&s=10",
                sizes: ["S", "M", "L"],
                newProduct: true,
                hot: true,
                outlet: false
            }
        ];
let cart = [];
// Hiển thị danh sách sản phẩm kèm theo thẻ  chọn Size
        function renderProducts(list = products) {
            const productList = document.getElementById('product-list');
            productList.innerHTML = '';

            if (list.length === 0) {
                productList.innerHTML = '<div class="no-product">Không tìm thấy sản phẩm phù hợp.</div>';
                return;
            }

            list.forEach(product => {
                // Tạo option cho Size
                const sizeOptions = product.sizes.map(s => `<option value="${s}">${s}</option>`).join('');

                productList.innerHTML += `
                    <div class="product-card" id="product-card-${product.id}">
                        <div>
                            <img src="${product.image}" alt="${product.name}">
                            <h3>${product.name}</h3>
                            <div class="price">${product.price.toLocaleString('vi-VN')} đ</div>
                            <div class="option-box">
                                <label for="size-${product.id}">Chọn Size:</label>
                                <select id="size-${product.id}">
                                    ${sizeOptions}
                                </select>
                                <button class="btn-detail-inline" onclick="openDetail(${product.id})">Xem chi tiết</button>
                            </div>
                        </div>
                        <button class="btn-add" onclick="addToCart(${product.id})">Thêm vào giỏ</button>
                    </div>
                `;
            });
        }
// Thêm sản phẩm vào giỏ
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            // Lấy giá trị size
            const selectedSize = document.getElementById(`size-${productId}`).value;

            // Kiểm tra xem đã có sản phẩm cùng ID VÀ cùng Size trong giỏ chưa
            const cartItem = cart.find(item => item.id === productId && item.size === selectedSize);

            if (cartItem) {
                cartItem.quantity++;
            } else {
                cart.push({ ...product, size: selectedSize, quantity: 1 });
            }

            updateCartUI();
        }
// Cập nhật giỏ hàng ra màn hình
        function updateCartUI() {
            const cartItems = document.getElementById('cart-items');
            const cartCount = document.getElementById('cart-count');
            const totalPrice = document.getElementById('total-price');
// Xóa nội dung giỏ hàng trước khi cập nhật
            cartItems.innerHTML = '';
            let total = 0;
            let totalCount = 0;
// Tính tiền và số lượng sản phẩm trong giỏ hàng
            cart.forEach((item, index) => {
                total += item.price * item.quantity;
                totalCount += item.quantity;

                cartItems.innerHTML += `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <strong>${item.name}</strong>
                            <div class="cart-item-size">Size: <b>${item.size}</b></div>
                            <div>${item.price.toLocaleString('vi-VN')} đ x ${item.quantity}</div>
                        </div>
                        <div style="display:flex; align-items:center; gap:10px;">
                            <b>${(item.price * item.quantity).toLocaleString('vi-VN')} đ</b>
                            <button class="cart-remove" onclick="removeFromCart(${index})" title="Xóa sản phẩm">🗑️</button>
                        </div>
                    </div>
                `;
            });
//chuyển đơn vị tiền
            cartCount.innerText = totalCount;
            totalPrice.innerText = total.toLocaleString('vi-VN');
        }
// Xóa 1 sản phẩm khỏi giỏ hàng
        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartUI();
        }

//đóng mở giỏ hàng
        function toggleCart() {
            const modal = document.getElementById('cart-modal');
            modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
        }
      // Cờ đánh dấu khách đang dở việc thanh toán để quay lại giỏ hàng sau khi đăng nhập
let pendingCheckout = false;

function checkout() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }

    // Chưa đăng nhập -> yêu cầu đăng ký tài khoản
    if (!currentUser) {
        alert("Bạn cần có tài khoản để đặt hàng. Vui lòng đăng ký tài khoản!");
        pendingCheckout = true;
        toggleCart();          // đóng giỏ hàng (giỏ đang mở nên sẽ đóng lại)
        openRegisterModal();   // mở form đăng ký
        return;
    }

    const orderTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    recordOrder({
        items: cart.map(item => ({ name: item.name, size: item.size, quantity: item.quantity, price: item.price })),
        total: orderTotal,
        itemCount,
        customer: currentUser.fullname
    });

    alert("Cảm ơn bạn đã đặt hàng! Chúng tôi sẽ liên hệ sớm.");
    cart = [];
    updateCartUI();
    toggleCart();
}
        //  ADMIN VÀ TÀI KHOẢN ĐĂNG KÝ/ĐĂNG NHẬP
        let accounts = [
            {
                fullname: "Quản Trị Viên",
                phone: "0936262702",
                address: "ManhStore",
                email: "admin@manhstore.vn",
                username: "admin",
                password: "admin123",
                isAdmin: true
            }
        ];

        // Tài khoản đang đăng nhập (null nếu chưa đăng nhập)
        let currentUser = null;

        // Mở / đóng modal ĐĂNG KÝ 
        function openRegisterModal() {
            closeLoginModal();
            document.getElementById('registerModal').style.display = 'flex';
        }

        function closeRegisterModal() {
            document.getElementById('registerModal').style.display = 'none';
            document.getElementById('registerForm').reset();
            document.getElementById('message').innerText = '';
        }

        function closeRegisterOutside(event) {
            if (event.target.id === 'registerModal') {
                closeRegisterModal();
            }
        }

        //  Mở / đóng modal ĐĂNG NHẬP 
        function openLoginModal() {
            if (currentUser) return; 
            // đã đăng nhập rồi thì không cần mở lại
            document.getElementById('loginModal').style.display = 'flex';
        }

        function closeLoginModal() {
            const modal = document.getElementById('loginModal');
            if (modal) {
                modal.style.display = 'none';
                document.getElementById('loginForm').reset();
                document.getElementById('loginMessage').innerText = '';
            }
        }

        function closeLoginOutside(event) {
            if (event.target.id === 'loginModal') {
                closeLoginModal();
            }
        }

        //  Chuyển qua lại giữa 2 form 
        function switchToLogin() {
            closeRegisterModal();
            openLoginModal();
        }

        function switchToRegister() {
            closeLoginModal();
            openRegisterModal();
        }

        // ---- Xử lý ĐĂNG KÝ ----
        document.getElementById('registerForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const fullname = document.getElementById('fullname').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const address = document.getElementById('address').value.trim();
            const email = document.getElementById('email').value.trim();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            const messageBox = document.getElementById('message');

            // Kiểm tra số điện thoại (9-11 chữ số)
            const phoneRegex = /^[0-9]{9,11}$/;
            if (!phoneRegex.test(phone)) {
                messageBox.style.color = 'red';
                messageBox.innerText = 'Số điện thoại không hợp lệ (9-11 chữ số).';
                return;
            }

            // Kiểm tra mật khẩu xác nhận khớp nhau
            if (password !== confirmPassword) {
                messageBox.style.color = 'red';
                messageBox.innerText = 'Mật khẩu xác nhận không khớp.';
                return;
            }

            // Kiểm tra trùng tên đăng nhập hoặc email
            const exists = accounts.some(acc => acc.username === username || acc.email === email);
            if (exists) {
                messageBox.style.color = 'red';
                messageBox.innerText = 'Tên đăng nhập hoặc email đã được sử dụng.';
                return;
            }

            // Lưu tài khoản mới
            accounts.push({ fullname, phone, address, email, username, password });

            messageBox.style.color = 'green';
            messageBox.innerText = 'Đăng ký thành công! Đang chuyển sang đăng nhập...';

            setTimeout(() => {
                switchToLogin();
            }, 1000);
        });

        // ---- Xử lý ĐĂNG NHẬP ----
        document.getElementById('loginForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const input = document.getElementById('loginUsername').value.trim();
            const password = document.getElementById('loginPassword').value;
            const messageBox = document.getElementById('loginMessage');

            const account = accounts.find(acc =>
                (acc.username === input || acc.email === input) && acc.password === password
            );

            if (!account) {
                messageBox.style.color = 'red';
                messageBox.innerText = 'Sai tên đăng nhập/email hoặc mật khẩu.';
                return;
            }

            currentUser = account;
            updateUserUI();
            closeLoginModal();
        });

        // ---- Đăng xuất ----
        function logout() {
            currentUser = null;
            closeAdminPanel();
            updateUserUI();
        }

        //  Cập nhật giao diện phần tài khoản trên header 
        function updateUserUI() {
            const userIcon = document.getElementById('userIcon');
            const userName = document.getElementById('userName');
            const btnLogout = document.getElementById('btnLogout');
            const btnAdmin = document.getElementById('btnAdmin');

            if (currentUser) {
                userIcon.onclick = null;
                userName.innerText = currentUser.fullname;
                btnLogout.style.display = 'inline-block';
                btnAdmin.style.display = currentUser.isAdmin ? 'inline-block' : 'none';
            } else {
                userIcon.onclick = openLoginModal;
                userName.innerText = '';
                btnLogout.style.display = 'none';
                btnAdmin.style.display = 'none';
            }
        }

        // ADMIN

        // Lịch sử đơn hàng và tổng doanh thu 
        let orders = [];
        let totalRevenue = 0;
        let orderSeq = 1;

        // Số người đang truy cập. 
        let onlineVisitors = 1; 
        let visitorTimer = null;

        // Ghi nhận 1 đơn hàng mới vào dòng tiền
        function recordOrder(order) {
            const record = {
                id: 'DH' + String(orderSeq++).padStart(4, '0'),
                time: new Date(),
                ...order
            };
            orders.unshift(record);
            totalRevenue += order.total;
            renderAdminPanel();
        }

        // Mô phỏng số người đang truy cập tăng/giảm ngẫu nhiên quanh 1 mốc nền
        function simulateVisitors() {
            const baseline = 8; // mốc nền giả lập
            const noise = Math.floor(Math.random() * 7) - 3; 
            onlineVisitors = Math.max(1, baseline + noise);
            renderVisitorCount();
        }

        function renderVisitorCount() {
            const el = document.getElementById('admin-visitors');
            if (el) el.innerText = onlineVisitors;
        }

        // Mở / đóng bảng quản trị 
        function openAdminPanel() {
            if (!currentUser || !currentUser.isAdmin) {
                alert('Bạn cần đăng nhập bằng tài khoản quản trị để xem trang này.');
                return;
            }
            document.getElementById('adminModal').style.display = 'flex';
            renderAdminPanel();

            // Cập nhật số người truy cập mô phỏng mỗi 4 giây khi bảng đang mở
            if (!visitorTimer) {
                simulateVisitors();
                visitorTimer = setInterval(simulateVisitors, 4000);
            }
        }

        function closeAdminPanel() {
            const modal = document.getElementById('adminModal');
            if (modal) modal.style.display = 'none';
            if (visitorTimer) {
                clearInterval(visitorTimer);
                visitorTimer = null;
            }
        }

        function closeAdminOutside(event) {
            if (event.target.id === 'adminModal') {
                closeAdminPanel();
            }
        }
// Vẽ biểu đồ % sản phẩm được chọn nhiều (tính theo số lượng trong các đơn hàng)
function renderProductChart() {
    const chart = document.getElementById('admin-chart');
    if (!chart) return;

    const counts = {};
    orders.forEach(o => {
        o.items.forEach(i => {
            counts[i.name] = (counts[i.name] || 0) + i.quantity;
        });
    });

    const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const sum = entries.reduce((s, e) => s + e[1], 0);

    if (sum === 0) {
        chart.innerHTML = '<div class="admin-empty">Chưa có dữ liệu để thống kê.</div>';
        return;
    }

    chart.innerHTML = entries.map(([name, qty], index) => {
        const pct = (qty / sum * 100).toFixed(1);
        return `
            <div class="chart-row">
                <div class="chart-label" title="${name}">${name}</div>
                <div class="chart-track">
                    <div class="chart-bar ${index === 0 ? 'top' : ''}" style="width:${pct}%"></div>
                </div>
                <div class="chart-value">${pct}% (${qty})</div>
            </div>
        `;
    }).join('');
}
        // Xóa toàn bộ dữ liệu doanh thu / đơn hàng (chỉ trong phiên hiện tại)
        function resetAdminData() {
            if (!confirm('Xóa toàn bộ dữ liệu doanh thu và đơn hàng?')) return;
            orders = [];
            totalRevenue = 0;
            orderSeq = 1;
            renderAdminPanel();
        }

        // Vẽ lại toàn bộ nội dung bảng quản trị
        function renderAdminPanel() {
            const revenueEl = document.getElementById('admin-revenue');
            const orderCountEl = document.getElementById('admin-order-count');
            const ordersBody = document.getElementById('admin-orders-body');

            if (!revenueEl || !orderCountEl || !ordersBody) return;

            revenueEl.innerText = totalRevenue.toLocaleString('vi-VN') + ' đ';
            orderCountEl.innerText = orders.length;
            renderVisitorCount();
            renderProductChart();

            if (orders.length === 0) {
                ordersBody.innerHTML = '<tr><td colspan="5" class="admin-empty">Chưa có đơn hàng nào.</td></tr>';
                return;
            }

            ordersBody.innerHTML = orders.map(o => `
                <tr>
                    <td>${o.id}</td>
                    <td>${o.time.toLocaleString('vi-VN')}</td>
                    <td>${o.customer}</td>
                    <td>${o.itemCount}</td>
                    <td>${o.total.toLocaleString('vi-VN')} đ</td>
                </tr>
            `).join('');
        }

        //  CHI TIẾT SẢN PHẨM 
        let currentDetailId = null;

        // Mở modal chi tiết, hiển thị đầy đủ thông tin sản phẩm
        function openDetail(id) {
            const product = products.find(p => p.id === id);
            if (!product) return;
            currentDetailId = id;
            document.getElementById('detail-image').src = product.image;
            document.getElementById('detail-image').alt = product.name;
            document.getElementById('detail-name').innerText = product.name;
            document.getElementById('detail-price').innerText = product.price.toLocaleString('vi-VN') + ' đ';
            document.getElementById('detail-category').innerText = product.category;
            document.getElementById('detail-description').innerText = product.description;
            document.getElementById('detail-material').innerText = product.material;
            document.getElementById('detail-color').innerText = product.color;
            document.getElementById('detail-category-text').innerText = product.category;
            const sizeSelect = document.getElementById('detail-size');
            sizeSelect.innerHTML = product.sizes.map(s => `<option value="${s}">${s}</option>`).join('');
            document.getElementById('detail-modal').style.display = 'flex';
        }
        function closeDetail() {
            document.getElementById('detail-modal').style.display = 'none';
            currentDetailId = null;
        }
        function closeDetailOutside(event) {
            if (event.target.id === 'detail-modal') {
                closeDetail();
            }
        }
        // Thêm vào giỏ ngay từ modal chi tiết
        function addDetailToCart() {
            if (currentDetailId === null) return;
            const product = products.find(p => p.id === currentDetailId);
            const selectedSize = document.getElementById('detail-size').value;
            const cartItem = cart.find(item => item.id === currentDetailId && item.size === selectedSize);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                cart.push({ ...product, size: selectedSize, quantity: 1 });
            }
            updateCartUI();
            closeDetail();
            toggleCart();
        }
        // LỌC VÀ SEARCH SẢN PHẨM
        // ID sản phẩm dùng cho menu "Sản phẩm bán chạy" và "Hàng mới"
        const bestSellerIds = [2, 5, 7];
        const newArrivalIds = [3, 4, 6, 8, 12];
        // Lọc theo loại: 'all' | 'new' | 'hot' 
        function filterProducts(type) {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            let filtered = products;
            if (type === 'new') {
                filtered = products.filter(p => p.newProduct);
            } else if (type === 'hot') {
                filtered = products.filter(p => p.hot);
            } else {
                const allBtn = document.querySelector('.category-btn');
                if (allBtn) allBtn.classList.add('active');
            }
            renderProducts(filtered);
            closeProductMenu();
        }
        // Lọc theo danh mục (Áo Nam, Quần Nam, Áo Nữ, Váy Nữ) từ thanh phân loại
        function filterCategory(category, btnElement) {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            if (btnElement) btnElement.classList.add('active');
            const filtered = category === 'all'
                ? products
                : products.filter(p => p.category === category);
            renderProducts(filtered);
        }
        // Bấm 1 danh mục trong mega-menu "Sản phẩm"
        function selectCategoryFromMenu(category) {
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.toggle('active', btn.textContent.trim() === category);
            });
            renderProducts(products.filter(p => p.category === category));
            closeProductMenu();
            document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
        }
        // Tìm kiếm sản phẩm theo tên
        function searchProducts() {
            const keyword = document.getElementById('search-input').value.trim().toLowerCase();
            const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
            renderProducts(filtered);
        }
        // Bật/tắt thanh tìm kiếm khi bấm icon kính lúp
        function focusSearch() {
            const searchArea = document.getElementById('search-area');
            const input = document.getElementById('search-input');
            searchArea.classList.toggle('active');
            if (searchArea.classList.contains('active')) {
                input.focus();
            } else {
                input.value = '';
                renderProducts();
            }
        }
        // Bấm 1 sản phẩm trong mega-menu (Bán chạy / Hàng mới) để xem ngay sản phẩm đó
        function goToProduct(id) {
            renderProducts(products.filter(p => p.id === id));
            closeProductMenu();
            document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });

            // Làm nổi bật nhẹ sản phẩm vừa chọn
            setTimeout(() => {
                const card = document.getElementById(`product-card-${id}`);
                if (card) {
                    card.style.boxShadow = '0 0 0 3px #d71920';
                    setTimeout(() => { card.style.boxShadow = ''; }, 1500);
                }
            }, 300);
        }
        // MEGA-MENU
        function toggleProductMenu() {
            document.getElementById('megaMenu').classList.toggle('active');
        }
        function closeProductMenu() {
            document.getElementById('megaMenu').classList.remove('active');
        }
        // Đóng mega-menu khi bấm ra ngoài
        document.addEventListener('click', function (event) {
            const dropdown = document.querySelector('.nav-item-dropdown');
            if (dropdown && !dropdown.contains(event.target)) {
                closeProductMenu();
            }
        });
        // Đổ dữ liệu "Sản phẩm bán chạy" và "Hàng mới" vào mega-menu
        function renderMenuLists() {
            const bestsellerList = document.getElementById('menu-bestsellers');
            const newArrivalList = document.getElementById('menu-newarrivals');
            bestsellerList.innerHTML = bestSellerIds
                .map(id => products.find(p => p.id === id))
                .filter(Boolean)
                .map(p => `<li onclick="goToProduct(${p.id})">${p.name}</li>`)
                .join('');
            newArrivalList.innerHTML = newArrivalIds
                .map(id => products.find(p => p.id === id))
                .filter(Boolean)
                .map(p => `<li onclick="goToProduct(${p.id})">${p.name}</li>`)
                .join('');
        }
        // QUAY VỀ TRANG BAN ĐẦU (LOGO MANHSTORE) 
        function goHome() {
            document.getElementById('search-input').value = '';
            document.getElementById('search-area').classList.remove('active');
            closeProductMenu();
            filterProducts('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // ===== LIÊN HỆ / CHAT VỚI ADMIN =====
const ADMIN_EMAIL = 'manh080307@gmail.com';

function toggleChatBox() {
    const box = document.getElementById('chatBox');
    box.classList.toggle('active');

    // Nếu khách đã đăng nhập thì điền sẵn tên
    if (box.classList.contains('active') && currentUser) {
        document.getElementById('chatName').value = currentUser.fullname;
    }
}

function sendChatToAdmin() {
    const name = document.getElementById('chatName').value.trim();
    const message = document.getElementById('chatMessage').value.trim();

    if (!name || !message) {
        alert('Vui lòng nhập tên và nội dung tin nhắn!');
        return;
    }

    const subject = encodeURIComponent('Khách hàng ' + name + ' liên hệ ManhStore');
    const body = encodeURIComponent('Tên: ' + name + '\n\nNội dung:\n' + message);

    // Mở ứng dụng email với nội dung đã điền sẵn
    window.location.href = 'mailto:' + ADMIN_EMAIL + '?subject=' + subject + '&body=' + body;

    document.getElementById('chatMessage').value = '';
    toggleChatBox();
}
// ===== THÔNG TIN ADMIN =====
function openAdminProfile() {
    document.getElementById('profileModal').style.display = 'flex';
}

function closeAdminProfile() {
    document.getElementById('profileModal').style.display = 'none';
}

function closeAdminProfileOutside(event) {
    if (event.target.id === 'profileModal') {
        closeAdminProfile();
    }
}
        renderProducts();
        updateUserUI();
        renderMenuLists();