import { DashboardLayout } from "@/components/DashboardLayout";

export default function CustomerManagement() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">고객 관리</h1>
        <p className="text-gray-600">
          고객 정보를 관리하고 분석하는 페이지입니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium">고객 목록</h2>
            <p className="text-sm text-gray-500 mt-1">
              모든 고객의 목록을 확인합니다.
            </p>
            <a
              href="/customer/list"
              className="inline-block mt-3 text-blue-600 text-sm hover:underline"
            >
              바로가기 →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium">신규 고객 등록</h2>
            <p className="text-sm text-gray-500 mt-1">
              새로운 고객을 시스템에 등록합니다.
            </p>
            <a
              href="/customer/register"
              className="inline-block mt-3 text-blue-600 text-sm hover:underline"
            >
              바로가기 →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium">고객 분석</h2>
            <p className="text-sm text-gray-500 mt-1">
              고객 데이터를 분석합니다.
            </p>
            <a
              href="/customer/analysis"
              className="inline-block mt-3 text-blue-600 text-sm hover:underline"
            >
              바로가기 →
            </a>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
