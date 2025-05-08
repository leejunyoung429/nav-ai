import { DashboardLayout } from "@/components/DashboardLayout";

export default function CustomerAnalysis() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">고객 분석</h1>
          <a
            href="/customer/list"
            className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
          >
            고객 목록으로 돌아가기
          </a>
        </div>
        <p className="text-gray-600">
          고객 데이터를 다양한 관점에서 분석합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium">총 고객 수</h2>
            <p className="text-3xl font-bold mt-2">458</p>
            <p className="text-sm text-green-600 mt-1">+12% 증가</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium">활성 고객</h2>
            <p className="text-3xl font-bold mt-2">378</p>
            <p className="text-sm text-green-600 mt-1">+5% 증가</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium">휴면 고객</h2>
            <p className="text-3xl font-bold mt-2">64</p>
            <p className="text-sm text-red-600 mt-1">-3% 감소</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium">신규 고객</h2>
            <p className="text-3xl font-bold mt-2">26</p>
            <p className="text-sm text-green-600 mt-1">+15% 증가</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border mt-6">
          <h2 className="text-lg font-medium mb-4">고객 상태 분포</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 mb-2">분석 차트 영역</p>
              <p className="text-sm text-gray-500">
                활성: 82.5% / 휴면: 14% / 탈퇴: 3.5%
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium mb-4">지역별 고객 분포</h2>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 mb-2">지역 분포 차트 영역</p>
                <p className="text-sm text-gray-500">
                  서울: 45% / 경기: 23% / 부산: 12% / 기타: 20%
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium mb-4">고객 가입 추이</h2>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 mb-2">가입 추이 차트 영역</p>
                <p className="text-sm text-gray-500">
                  최근 6개월간 평균 30명/월 가입
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
