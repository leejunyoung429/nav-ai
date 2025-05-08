import { DashboardLayout } from "@/components/DashboardLayout";

// 가상의 고객 데이터
const customers = [
  {
    id: 1,
    name: "김철수",
    email: "kim@example.com",
    status: "활성",
    joinDate: "2023-01-15",
  },
  {
    id: 2,
    name: "이영희",
    email: "lee@example.com",
    status: "활성",
    joinDate: "2023-02-20",
  },
  {
    id: 3,
    name: "박지민",
    email: "park@example.com",
    status: "휴면",
    joinDate: "2023-03-10",
  },
  {
    id: 4,
    name: "최동훈",
    email: "choi@example.com",
    status: "활성",
    joinDate: "2023-04-05",
  },
  {
    id: 5,
    name: "정수연",
    email: "jung@example.com",
    status: "탈퇴",
    joinDate: "2023-05-18",
  },
];

export default function CustomerList() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">고객 목록</h1>
          <a
            href="/customer/register"
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
          >
            신규 고객 등록
          </a>
        </div>
        <p className="text-gray-600">모든 고객의 정보를 확인할 수 있습니다.</p>

        <div className="bg-white rounded-lg shadow-sm border mt-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    고객 ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    이름
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    이메일
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    상태
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    가입일
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
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {customer.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {customer.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {customer.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          customer.status === "활성"
                            ? "bg-green-100 text-green-800"
                            : customer.status === "휴면"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {customer.joinDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        상세
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
        </div>
      </div>
    </DashboardLayout>
  );
}
