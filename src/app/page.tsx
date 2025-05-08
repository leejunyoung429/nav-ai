import { DashboardLayout } from "@/components/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">대시보드 홈</h1>
        <p className="text-gray-600">
          네비게이션을 사용하여 여러 메뉴를 탐색할 수 있습니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium">고객 관리</h2>
            <p className="text-sm text-gray-500 mt-1">
              고객 정보를 관리하고 분석할 수 있습니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium">제품 관리</h2>
            <p className="text-sm text-gray-500 mt-1">
              제품 목록과 재고를 관리할 수 있습니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium">설정</h2>
            <p className="text-sm text-gray-500 mt-1">
              계정, 메일링, 보안 설정을 변경할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
