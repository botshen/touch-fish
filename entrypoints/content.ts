import './style.css';

const xxxx = () => {
  // 添加隐藏元素的 CSS 类
  const style = document.createElement('style');
  style.textContent = `
    .touch-fish-hidden {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
  // 隐藏所有的<video>标签
  document.querySelectorAll('video').forEach((video) => {
    video.classList.add('touch-fish-hidden');
  });



  // 隐藏所有的<svg>标签
  // document.querySelectorAll('svg').forEach((svg) => {
  //   svg.classList.add('touch-fish-hidden');
  // });
  // 隐藏所有的<img>标签
  document.querySelectorAll('picture').forEach((img) => {
    img.classList.add('touch-fish-hidden');
  });

  // 隐藏以Frame_top_2ybWw开头的class
  document.querySelectorAll(`[class^="Frame_top_"]`).forEach((frame) => {
    frame.classList.add('touch-fish-hidden');
  });

  // 隐藏以SecBar_secBar_开头的class
  document.querySelectorAll(`[class^="SecBar_secBar_"]`).forEach((secBar) => {
    secBar.classList.add('touch-fish-hidden');
  });
  // 隐藏以SecBar_visable_开头的class
  document.querySelectorAll(`[class^="SecBar_visable_"]`).forEach((visable) => {
    visable.classList.add('touch-fish-hidden');
  });

  // class="Frame_side_3G0Bf grayTheme" 隐藏这个div
  document.querySelectorAll(`[class^="Frame_side_"]`).forEach((side) => {
    side.classList.add('touch-fish-hidden');
  });
  // Main_side_
  document.querySelectorAll(`[class^="Main_side_"]`).forEach((side) => {
    side.classList.add('touch-fish-hidden');
  });
  // class="picture picture-box_row_30Iwo"
  document.querySelectorAll('.picture[class*="picture-box_row_"]').forEach((side) => {
    side.classList.add('touch-fish-hidden');
  });

  // card-video_videoBox_
  document.querySelectorAll(`[class^="card-video_videoBox_"]`).forEach((side) => {
    side.classList.add('touch-fish-hidden');
  });
  // woo-picture-main
  document.querySelectorAll('.woo-picture-main').forEach((side) => {
    side.classList.add('touch-fish-hidden');
  });
  // woo-button-main
  document.querySelectorAll('.woo-button-main').forEach((side) => {
    side.classList.add('touch-fish-hidden');
  });
  // woo-avatar-main woo-avatar-hover head_avatar_20c9y
  document.querySelectorAll('.woo-avatar-main.woo-avatar-hover[class*="head_avatar_"]').forEach((side) => {
    side.classList.add('touch-fish-hidden');
  });
  // class="woo-icon-wrap woo-icon-opacity IconVip_icon_2tjdp"
  document.querySelectorAll('[class*="woo-icon-wrap"][class*="woo-icon-opacity"][class*="IconVip_icon_"]').forEach((side) => {
    side.classList.add('touch-fish-hidden');
  });

  // wbpro-feed-content
  const contentElement = document.querySelectorAll('.wbpro-feed-content');
  if (contentElement) {
    contentElement.forEach((side) => {
      (side as HTMLElement).style.paddingLeft = '0';
    });
  }
  // icon-link
  document.querySelectorAll('.icon-link').forEach((side) => {
    side.classList.add('touch-fish-hidden');
  });
  // class="card-vote_wrap_15NVR card-vote_original_2JeMZ content_row_-r5Tk"
  document.querySelectorAll('[class*="card-vote_wrap_"][class*="card-vote_original_"][class*="content_row_"]').forEach((side) => {
    side.classList.add('touch-fish-hidden');
  });

  // Frame_wrap_  
  const appElement = document.querySelector('#app');
  if (appElement) {
    const frameWrapElement = appElement.querySelector('[class*="Frame_wrap"]');
    if (frameWrapElement) {
      (frameWrapElement as HTMLElement).classList.add('xxxxxx');
    }
  }

  // footer
  // document.querySelectorAll('footer').forEach((side) => {
  //   side.classList.add('touch-fish-hidden');
  // });

  document.querySelectorAll('img').forEach((side) => {
    side.classList.add('touch-fish-hidden');
  });

  //ALink_none_1w6rm tag_boxAlink_24N89
  document.querySelectorAll('[class*="ALink_none_"][class*="tag_boxAlink_"]').forEach((side) => {
    side.classList.add('touch-fish-hidden');
  });
}

export default defineContentScript({
  matches: ['*://*.weibo.com/*'],
  cssInjectionMode: 'ui',
  async main(ctx) {
    // 创建 Word 风格的顶部栏
    const wordTopBar = document.createElement('div');
    wordTopBar.className = 'word-top-bar';
    wordTopBar.innerHTML = `
      <div class="word-header">
        <div class="word-title">
          <div class="word-icon">W</div>
          <div class="doc-title">文档1 - Word</div>
          <div class="window-controls">
            <span class="window-btn minimize">─</span>
            <span class="window-btn maximize">□</span>
            <span class="window-btn close">×</span>
          </div>
        </div>
        <div class="quick-access">
          <span class="quick-btn save">💾</span>
          <span class="quick-btn undo">↩</span>
          <span class="quick-btn redo">↪</span>
        </div>
      </div>
      <div class="word-ribbon">
        <div class="ribbon-tabs">
          <span class="ribbon-tab active">开始</span>
          <span class="ribbon-tab">插入</span>
          <span class="ribbon-tab">绘图</span>
          <span class="ribbon-tab">设计</span>
          <span class="ribbon-tab">布局</span>
          <span class="ribbon-tab">引用</span>
          <span class="ribbon-tab">邮件</span>
          <span class="ribbon-tab">审阅</span>
          <span class="ribbon-tab">视图</span>
          <span class="ribbon-tab">帮助</span>
        </div>
        <div class="ribbon-content">
          <div class="ribbon-group">
            <div class="ribbon-tools">
              <span class="tool-btn paste">
                <span class="icon">📋</span>
                <span class="label">粘贴</span>
              </span>
            </div>
            <div class="group-label">剪贴板</div>
          </div>
          <div class="ribbon-group">
            <div class="ribbon-tools font-tools">
              <div class="font-select">
                <span>微软雅黑</span>
                <span class="size">11</span>
              </div>
              <div class="font-btns">
                <span class="tool-btn">B</span>
                <span class="tool-btn">I</span>
                <span class="tool-btn">U</span>
              </div>
            </div>
            <div class="group-label">字体</div>
          </div>
        </div>
      </div>
    `;
    document.body.insertBefore(wordTopBar, document.body.firstChild);



    // 创建 style 元素
    const style = document.createElement('style');
    style.textContent = `
      .word-top-bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 158px;
         z-index: 9999;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #e6e6e6;
        font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif;
      }

      .word-header {
        height: 32px;
        background: #217346;
        display: flex;
        align-items: center;
        padding: 0 4px;
        color: white;
      }

      .word-title {
        display: flex;
        align-items: center;
        flex: 1;
        font-size: 12px;
      }

      .word-icon {
        width: 16px;
        height: 16px;
        background: white;
        color: #217346;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 6px;
        font-weight: bold;
        border-radius: 2px;
      }

      .window-controls {
        display: flex;
        margin-left: auto;
      }

      .window-btn {
        width: 45px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .window-btn:hover {
        background: rgba(255,255,255,0.1);
      }

      .quick-access {
        display: flex;
        gap: 8px;
        padding: 0 10px;
        border-left: 1px solid rgba(255,255,255,0.2);
        margin-left: 10px;
      }

      .quick-btn {
        padding: 4px;
        cursor: pointer;
        opacity: 0.9;
      }

      .quick-btn:hover {
        opacity: 1;
        background: rgba(255,255,255,0.1);
      }

      .word-ribbon {
        background: #f3f2f1;
      }

      .ribbon-tabs {
        height: 32px;
        display: flex;
        align-items: center;
        padding: 0 4px;
        gap: 1px;
        background: #f3f2f1;
      }

      .ribbon-tab {
        padding: 0 12px;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #444;
        cursor: pointer;
        position: relative;
      }

      .ribbon-tab:hover {
        background: #e6e6e6;
      }

      .ribbon-tab.active {
        background: white;
        color: #217346;
      }

      .ribbon-content {
        height: 94px;
        background: white;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        padding: 4px;
      }

      .ribbon-group {
        padding: 0 2px;
        border-right: 1px solid #e6e6e6;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 50px;
      }

      .group-label {
        font-size: 11px;
        color: #666;
        margin-top: auto;
        padding: 2px 0;
      }

      .ribbon-tools {
        display: flex;
        gap: 2px;
        padding: 4px;
      }

      .tool-btn {
        padding: 4px 8px;
        font-size: 12px;
        color: #444;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
      }

      .tool-btn:hover {
        background: #e3e3e3;
        border-radius: 3px;
      }

      .font-tools {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .font-select {
        display: flex;
        gap: 8px;
        font-size: 12px;
        color: #444;
      }

      .font-btns {
        display: flex;
        gap: 2px;
      }

      body {
        margin-top: 158px;
        margin-bottom: 25px;
        background: #fff;
      }

      .word-bottom-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 25px;
        background: #f3f2f1;
        border-top: 1px solid #e6e6e6;
        z-index: 9999;
        display: flex;
        align-items: center;
        padding: 0 20px;
        font-size: 12px;
        color: #666;
      }

      .status-items {
        display: flex;
        gap: 20px;
      }

      .xxxxxx {
        background-color: #fff !important;
        max-width: 800px;
        margin: 0 auto;
        padding: 40px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        min-height: calc(100vh - 155px);
      }
      
      a {
        color: #000 !important;
      }

      .expand {
        color: #000 !important;
      }
    `;

    // 将 style 元素添加到文档头部
    document.head.appendChild(style);

    console.log('222', 222);
    // 创建 MutationObserver 实例
    const observer = new MutationObserver((mutations) => {
      xxxx();
    });

    // 配置 observer
    const config = {
      childList: true,  // 监听子节点的增删
      subtree: true     // 监听所有后代节点
    };

    // 开始观察 document.body
    observer.observe(document.body, config);

    // 3. Define your UI
    const ui = await createShadowRootUi(ctx, {
      name: 'example-ui',
      position: 'overlay',
      anchor: 'html',
      onMount(container) {
        const button = document.createElement('button');
        button.textContent = 'Hello world!';
        button.classList.add('floating-button');
        container.append(button);
        button.addEventListener('click', () => {
          xxxx()
        });
      },
    });

    // 4. Mount the UI
    ui.mount();
  },
});
