# VESLA 独立站每日运营与增长 SOP (v1.0)
*依据：独立站快速起流量手册 & SEO 专家大脑核心算法*

## 核心指标 (KPI)
- **收录率**: > 95% (当前状态: 核心页已收录, 持续监控新页)
- **询盘转化率**: 目标 3% - 5%
- **AI 提及率**: 20 问基线测试 (每月 1 日执行)
- **LCP**: < 2.5s (当前: 0.8s - 优秀)

---

## 📅 每日例行 (每天 09:30)
- [ ] **收录验证**: 检查昨天提交的 `IndexNow` 页面在 Bing 是否可见。
- [ ] **异常巡检**: 检查 GSC 索引报告，处理新增的 "Discovered - not indexed" 页面。
- [ ] **30分钟响应核对**: 检查昨日询盘响应时间，确保使用了 `{30分钟首复模板}`。

## 📅 每周杠杆 (每周五)
- [ ] **机会词爆破 (ROI 最高)**:
    - 登录 GSC -> 筛选 Position 8-20, Impressions > 100。
    - 选取 Top 3 页面进行“提取化改造” (增加数据点、FAQ Schema)。
- [ ] **内容集群补位**:
    - 发布 1 篇新博客 (Pillar 关联)。
    - 更新 1 篇流量下降的旧博客 (更新日期至当前月)。
- [ ] **站外实体注入**:
    - Reddit 相关 Subreddit 答疑 2 条 (不带链接或仅带高价值博客链接)。
    - LinkedIn Pulse 同步发布。

## 📅 每月审计 (每月 1 日)
- [ ] **AI 提及基线复测**: 跑 20 个买家问题，记录 VESLA 被提及的频率。
- [ ] **转化路径热力图**: 查看 Microsoft Clarity 录屏，分析 Rage Click (愤怒点击)。
- [ ] **数据资产更新**: 更新 `llms.txt` 中的 MOQ 和价格区间，确保 AI 抓取的是最新事实。

---

## 🛠️ 专家级工具快捷包
- **IndexNow 接口**: 已集成于 `scripts/push-index-now.mjs`
- **Schema 验证器**: [Google Rich Results Test](https://search.google.com/test/rich-results)
- **UTM 规范**: `utm_source=email-sig | whatsapp | reddit | linkedin`
