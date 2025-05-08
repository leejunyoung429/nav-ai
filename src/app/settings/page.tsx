import { DashboardLayout } from "@/components/DashboardLayout";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">설정</h1>
        <p className="text-gray-600">
          시스템 설정을 관리할 수 있는 페이지입니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium">계정 설정</h2>
            <p className="text-sm text-gray-500 mt-1">
              계정 정보와 권한을 관리합니다.
            </p>
            <a
              href="/settings/account"
              className="inline-block mt-3 text-blue-600 text-sm hover:underline"
            >
              바로가기 →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium">메일링 설정</h2>
            <p className="text-sm text-gray-500 mt-1">
              이메일 알림 및 뉴스레터 설정을 관리합니다.
            </p>
            <a
              href="/settings/mailing"
              className="inline-block mt-3 text-blue-600 text-sm hover:underline"
            >
              바로가기 →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium">보안 설정</h2>
            <p className="text-sm text-gray-500 mt-1">
              시스템 보안 및 인증 설정을 관리합니다.
            </p>
            <a
              href="/settings/security"
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
