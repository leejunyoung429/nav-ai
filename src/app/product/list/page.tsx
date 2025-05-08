import { DashboardLayout } from "@/components/DashboardLayout";

// 가상의 제품 데이터
const products = [
  {
    id: "P001",
    name: "스마트폰",
    category: "전자기기",
    price: 1200000,
    stock: 15,
  },
  {
    id: "P002",
    name: "노트북",
    category: "전자기기",
    price: 1800000,
    stock: 8,
  },
  {
    id: "P003",
    name: "무선이어폰",
    category: "액세서리",
    price: 220000,
    stock: 24,
  },
  {
    id: "P004",
    name: "블루투스 스피커",
    category: "오디오",
    price: 150000,
    stock: 12,
  },
  {
    id: "P005",
    name: "스마트워치",
    category: "웨어러블",
    price: 350000,
    stock: 5,
  },
  {
    id: "P006",
    name: "게이밍 마우스",
    category: "컴퓨터",
    price: 89000,
    stock: 18,
  },
  { id: "P007", name: "키보드", category: "컴퓨터", price: 120000, stock: 10 },
];

export default function ProductList() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">제품 목록</h1>
          <a
            href="/product/register"
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
          >
            신규 제품 등록
          </a>
        </div>
        <p className="text-gray-600">모든 제품의 목록을 확인할 수 있습니다.</p>

        <div className="bg-white rounded-lg shadow-sm border mt-6">
          <div className="p-4 border-b flex justify-between items-center">
            <div className="flex space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="제품명 검색"
                  className="pl-8 pr-4 py-2 border rounded-md text-sm"
                />
                <svg
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <select className="border rounded-md text-sm px-4 py-2">
                <option value="">전체 카테고리</option>
                <option value="전자기기">전자기기</option>
                <option value="액세서리">액세서리</option>
                <option value="오디오">오디오</option>
                <option value="웨어러블">웨어러블</option>
                <option value="컴퓨터">컴퓨터</option>
              </select>
            </div>

            <div>
              <select className="border rounded-md text-sm px-4 py-2">
                <option value="price_asc">가격 낮은순</option>
                <option value="price_desc">가격 높은순</option>
                <option value="stock_asc">재고 적은순</option>
                <option value="stock_desc">재고 많은순</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    제품 ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    제품명
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    카테고리
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    가격
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    재고
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    관리
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {product.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.price.toLocaleString()}원
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          product.stock > 10
                            ? "bg-green-100 text-green-800"
                            : product.stock > 5
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.stock}개
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        수정
                      </a>
                      <a href="#" className="text-red-600 hover:text-red-900">
                        삭제
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                총 <span className="font-medium">{products.length}</span>개 제품
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-2 border rounded-md text-sm">
                  이전
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm">
                  1
                </button>
                <button className="px-3 py-2 border rounded-md text-sm">
                  다음
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
