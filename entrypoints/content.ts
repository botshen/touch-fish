import './style.css';

const xxxx = () => {
  // 删除所有的<video>标签
  document.querySelectorAll('video').forEach((video) => {
    video.remove();
  });
  // 删除所有的<svg>标签
  document.querySelectorAll('svg').forEach((svg) => {
    svg.remove();
  });
  // 删除所有的<img>标签
  document.querySelectorAll('picture').forEach((img) => {
    img.remove();
  });
  // 删除以Frame_top_2ybWw开头的class
  document.querySelectorAll(`[class^="Frame_top_"]`).forEach((frame) => {
    frame.remove();
  });
  // 删除以SecBar_secBar_开头的class
  document.querySelectorAll(`[class^="SecBar_secBar_"]`).forEach((secBar) => {
    secBar.remove();
  });
  // 删除以SecBar_visable_开头的class
  document.querySelectorAll(`[class^="SecBar_visable_"]`).forEach((visable) => {
    visable.remove();
  });
  // class="Frame_side_3G0Bf grayTheme" 删除这个div
  document.querySelectorAll(`[class^="Frame_side_"]`).forEach((side) => {
    side.remove();
  });

  // Main_side_
  document.querySelectorAll(`[class^="Main_side_"]`).forEach((side) => {
    side.remove();
  });
  // class="picture picture-box_row_30Iwo"
  document.querySelectorAll('.picture[class*="picture-box_row_"]').forEach((side) => {
    side.remove();
  });
  // card-video_videoBox_
  document.querySelectorAll(`[class^="card-video_videoBox_"]`).forEach((side) => {
    side.remove();
  });
  // woo-picture-main
  document.querySelectorAll('.woo-picture-main').forEach((side) => {
    side.remove();
  });
  // woo-button-main
  document.querySelectorAll('.woo-button-main').forEach((side) => {
    side.remove();
  });
  // Frame_wrap_  背景红色
  const appElement = document.querySelector('#app');
  if (appElement) {
    const frameWrapElement = appElement.querySelector('[class*="Frame_wrap"]');
    if (frameWrapElement) {
      (frameWrapElement as HTMLElement).classList.add('xxxxxx');
    }
  }
  // woo-avatar-main woo-avatar-hover head_avatar_20c9y
  document.querySelectorAll('.woo-avatar-main.woo-avatar-hover[class*="head_avatar_"]').forEach((side) => {
    side.remove();
  });
  // class="card-vote_wrap_15NVR card-vote_original_2JeMZ content_row_-r5Tk"
  document.querySelectorAll('[class*="card-vote_wrap_"][class*="card-vote_original_"][class*="content_row_"]').forEach((side) => {
    side.remove();
  });
  // wbpro-feed-content
  const contentElement = document.querySelectorAll('.wbpro-feed-content');
  if (contentElement) {
    contentElement.forEach((side) => {
      (side as HTMLElement).style.paddingLeft = '0';
    });
  }

  // footer
  document.querySelectorAll('footer').forEach((side) => {
    side.remove();
  });

  // icon-link
  document.querySelectorAll('.icon-link').forEach((side) => {
    side.remove();
  });
  document.querySelectorAll('img').forEach((side) => {
    side.remove();
  });

  //ALink_none_1w6rm tag_boxAlink_24N89
  document.querySelectorAll('[class*="ALink_none_"][class*="tag_boxAlink_"]').forEach((side) => {
    side.remove();
  });


  // class="woo-icon-wrap woo-icon-opacity IconVip_icon_2tjdp"
  document.querySelectorAll('[class*="woo-icon-wrap"][class*="woo-icon-opacity"][class*="IconVip_icon_"]').forEach((side) => {
    side.remove();
  });
}

export default defineContentScript({
  matches: ['*://*.weibo.com/*'],
  cssInjectionMode: 'ui',
  async main(ctx) {
    // 创建 style 元素
    const style = document.createElement('style');
    style.textContent = `
      .xxxxxx {
        background-color: #e8e8e8 !important;
      }
      
      a{
      color: #000 !important;
      }

      .expand{
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
