"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

export default function MailingSettings() {
  const [settings, setSettings] = useState({
    marketingEmails: true,
    newsletterFrequency: "weekly",
    productUpdates: true,
    eventNotifications: false,
    securityAlerts: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setSettings((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "메일링 설정이 저장되었습니다.\n" + JSON.stringify(settings, null, 2)
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">메일링 설정</h1>
          <a
            href="/settings"
            className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
          >
            설정으로 돌아가기
          </a>
        </div>
        <p className="text-gray-600">
          이메일 알림 및 뉴스레터 설정을 관리합니다.
        </p>

        <div className="bg-white rounded-lg shadow-sm border mt-6 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-medium border-b pb-2">알림 설정</h2>

              <div className="flex items-center justify-between py-2">
                <div>
                  <h3 className="text-sm font-medium">마케팅 이메일</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    신규 제품, 할인 및 프로모션 관련 이메일을 받습니다.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="marketingEmails"
                    checked={settings.marketingEmails}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between py-2 border-t">
                <div>
                  <h3 className="text-sm font-medium">뉴스레터 빈도</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    뉴스레터를 받는 빈도를 선택합니다.
                  </p>
                </div>
                <select
                  name="newsletterFrequency"
                  value={settings.newsletterFrequency}
                  onChange={handleChange}
                  className="border rounded-md text-sm px-4 py-2"
                >
                  <option value="daily">매일</option>
                  <option value="weekly">매주</option>
                  <option value="monthly">매월</option>
                  <option value="never">수신 안함</option>
                </select>
              </div>

              <div className="flex items-center justify-between py-2 border-t">
                <div>
                  <h3 className="text-sm font-medium">제품 업데이트</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    제품 업데이트 및 새로운 기능 관련 알림을 받습니다.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="productUpdates"
                    checked={settings.productUpdates}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between py-2 border-t">
                <div>
                  <h3 className="text-sm font-medium">이벤트 알림</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    웨비나, 컨퍼런스 등 이벤트 관련 알림을 받습니다.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="eventNotifications"
                    checked={settings.eventNotifications}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between py-2 border-t">
                <div>
                  <h3 className="text-sm font-medium">보안 알림</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    계정 로그인, 보안 업데이트 등의 중요 알림을 받습니다.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="securityAlerts"
                    checked={settings.securityAlerts}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end space-x-3 border-t">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-50"
                onClick={() => {
                  setSettings({
                    marketingEmails: true,
                    newsletterFrequency: "weekly",
                    productUpdates: true,
                    eventNotifications: false,
                    securityAlerts: true,
                  });
                }}
              >
                기본값으로 복원
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
              >
                설정 저장
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
