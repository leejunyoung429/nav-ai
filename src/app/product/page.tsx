import { DashboardLayout } from "@/components/DashboardLayout";

export default function ProductManagement() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">제품 관리</h1>
        <p className="text-gray-600">
          제품 정보를 관리하고 재고를 확인하는 페이지입니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium">제품 목록</h2>
            <p className="text-sm text-gray-500 mt-1">
              모든 제품의 목록을 확인합니다.
            </p>
            <a
              href="/product/list"
              className="inline-block mt-3 text-blue-600 text-sm hover:underline"
            >
              바로가기 →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium">신규 제품 등록</h2>
            <p className="text-sm text-gray-500 mt-1">
              새로운 제품을 시스템에 등록합니다.
            </p>
            <a
              href="/product/register"
              className="inline-block mt-3 text-blue-600 text-sm hover:underline"
            >
              바로가기 →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium">재고 관리</h2>
            <p className="text-sm text-gray-500 mt-1">
              제품 재고를 확인하고 관리합니다.
            </p>
            <a
              href="/product/inventory"
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
